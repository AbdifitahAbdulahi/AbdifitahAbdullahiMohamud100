const fs = require('fs');
const path = require('path');

const filePath = './data/tasks.json';

const writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks,))
}
const readTasksFromFile = () => {
    if(!fs.existsSync(filePath)) {
        writeTasksToFile([])
    }
    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}