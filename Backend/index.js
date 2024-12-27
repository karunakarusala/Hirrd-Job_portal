const express = require('express')
const app =express()
const mongoose = require('mongoose')
const Port = process.env.PORT || 3000
const cors = require('cors')

app.use(express.json())
app.use(cors())

async function main(){
    try {
        await mongoose.connect('mongodb+srv://karunakarusala:uluwIFZzuKm41iNf@karunakarusala.k7o88.mongodb.net/JobPortalData')
          console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
}

main()

const newSchema = new mongoose.Schema({
    jobTitle: 'String',
    jobLocation: 'String',
    companyName: 'String',
    postingDate: 'String',
    WorkMode: 'String',
    employmentType: 'String',
    skills: 'Array',
    description: 'String'
})

const data = mongoose.model('jobData',newSchema,'jobData')

app.post('/postData',async(req,res)=>{
    try{
          const jobData = req.body
          console.log(jobData)
          const newData = await data.create(jobData)
        //   const result = await newData.insertOne(jobData)
        //console.log(newData)
        return res.status(200).send(newData)
    }
    catch(error){
        return res.status(404).send(error)
    }
})
app.get('/allJobs',async(req,res)=>{
    const getData = await data.find()
    res.send(getData)
    console.log(getData)
})


app.get('/myJobs',async(req,res)=>{
  const jobTitle = req.query.jobTitle
  console.log(jobTitle)
  const getData = await data.find({jobTitle: "Software Development Engineer"})
  res.send(getData)
  console.log(getData)
})

app.get('/search', async (req, res) => {
    try {
        const searchData = req.query.jobTitle;
        console.log(searchData,"this is searchdata") // Get 'jobTitle' from query parameters
        if (!searchData) {
            return res.status(400).send({ error: "jobTitle query parameter is required" });
        }
        
const result = await data.find({ jobTitle: { $regex: searchData, $options: "i" } });        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred while searching" });
    }
});


app.listen(Port ,()=>{
    console.log(`running on port${Port}`)
})
