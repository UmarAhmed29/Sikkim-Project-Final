importScripts('./ngsw-worker.js');

// indexeddb imports
import { StudentService } from '../../../provider/IndexedDb/student.service';
import { Student, IStudent } from '../../../provider/model/student';

self.addEventListener('sync', (event) => {
    console.log('In servide-worker.js addEventListener');
    if(event.tag === 'post-data'){
        event.waitUntil(addData());
    }
});


function addData(){
    data = StudentService.getStudents();
    console.log('data from service-worker file :: ', data)
    fetch("http://localhost:8000/api/studentRegistration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then(() => Promise.resolve())
        .catch(() => Promise.reject());
}
