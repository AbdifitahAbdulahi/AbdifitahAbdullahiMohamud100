const { IncomingForm } = require ('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler")

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'content-type': 'application/json'})
    res.end(JSON.stringify(tasks))

}
exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) =>{
        if(err){
            res.writeHead(400, {'content-type': 'applacation/json'});
            res.end(JSON.stringify({
                message: 'Error parsing form'
            }))
            return;
        }
    })
const tasks = readTasksFromFile()
const newTaks = {
    id: Date.now(),
    title: fields.title,
    description: fields.description,
    status: fields?.status || 'pending',
    image:files.image ? `/upload/${files.image.name}` : null,

}
tasks.push(newTaks);

writeTasksToFile(tasks);

if(files.image){
    copyFileSync(files.image.path, path.join(__dirname, '../uploads', files.image.name));
    res.end(JSON.stringify(newTaks))
}
exports.updateTask = (req, res) => {
    res.end(JSON.stringify({
        message: 'Not yet implemented'
    }))
}



}