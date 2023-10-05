//create your own resume data in JSON format

var resume = {
    personalInformation: [{
        name: "Kavitha R",
        email: "kavitha4097@gmail.com",
        Date_of_Birth: "18.07.1997",
        Gender: "Female",
        Nationality: "Indian",
        Marital_Status: "Single",
        phone: "7306276573",
        address: "5A Easwari Nivas, Kaipencherry road, Irumpanam,Ernakulam",
    
    }],
    education: [
        {
            "degree": "B.Tech in Computer Science & Engineering",
            "College": "Kalasalingam University",
            "year": "2015-2019"
        }
    ],
    skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git", "Database Management"],
    languages: ["English", "Hindi", "Tamil", "Malayalam"],
    interests: ["Web Development", "Traveling", "Writing", "Photography"]
}
var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

