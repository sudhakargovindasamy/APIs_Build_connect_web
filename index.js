const express = require("express");
const mongoose = require('mongoose');
const cors=require('cors');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URL = 'mongodb+srv://sudhakargovindasamy2004_db_user:q0NUQhKAid5z2AlV@cluster0.ghgc4kh.mongodb.net/notesDB';

mongoose.connect(MONGO_URL)
    .then(()=> console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB Connection error",err.message));

    const notesSchema = new mongoose.Schema({
        title:{
            type:String,
            required:[true,'Title is required'],
            trim:true
        },
        content:{
            type:String,
            trim:true,
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        updatedAt:{
            type:Date
        }
    });


    notesSchema.pre('save',function(next){
        this.updatedAt=Date.now();
        next();
    });


const Note= mongoose.model("Notes",notesSchema);

app.get("/notes",async(req,res)=>{
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.json(notes);
    }catch(err){
        res.status(500).json({message:"Server error while fetching notes"});
    }
    
});

app.post("/notes",async(req,res)=>{
    const {title,content}= req.body;

    if(!title){
        return res.status(400).json({message:"Title is required"});
    }

    const newNote = new Note({title,content});
    await newNote.save();

    res.status(201).json({message:"Note created successfully",note:newNote});

});

app.put("/notes/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,content}=req.body;

        const note = await Note.findById(id);

        if(!note) return res.status(404).json({message:"Notes not found"});

        if(title !== undefined) note.title=title;

        if(content !== undefined) note.content = content;
        note.updatedAt=Date.now();

        await note.save();
        res.json({message:"Note updated successfully",note});
    }catch(err){
        res.status(500).json({message:"Internal server error"});
    }
});

app.delete("/notes/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const note = await Note.findByIdAndDelete(id);

        if(!note) return res.status(404).json({message:"Notes not found"});

        res.json({message:"Note deleted successfully"});
    }catch(err){
        res.status(500).json({message:"Error deleting note"});
    }
    });
    
    app.use((err,req,res,next) =>{
        console.error("Error:",err.stack);
        res.status(500).json({message:"Something went wrong on the server"});
    });

app.get("/",(req,res)=>{
    res.send("Welcome to APIs Project")
})

const PORT=process.env.PORT || 1010;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

