
import { Course } from "../../types/courses";
import api from "../AxiosConfig";


/* eslint-disable @typescript-eslint/no-explicit-any */
const urlCoursesBase = `https://662d9fcea7dda1fa378af332.mockapi.io/api/PR4/courses`;


const getCourses = async(page:number,limit:number,searchName?:string):Promise<Course[]>=>{
    const response = await api.get('courses', {
        params: {
          page,
          limit,
           ...(searchName ? { name: searchName } : {})
        },
      });
    const result = response.data;
    return result;
}


const createCourse = async (data : Course) => {
    const response = await fetch(urlCoursesBase, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Error create course');
    }

    const result = await response.json();
    return result;
}


const editCourse = async (data: Course) =>{
    const response = await fetch(`${urlCoursesBase}/${data.id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Error edit course');
    }

    const result = await response.json();
    return result;
}

const deleteCourse = async (id: string) => {
    const response = await fetch(`${urlCoursesBase}/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        throw new Error('Error delete course');
    }

    return response.ok;
}



export {
    createCourse,
    deleteCourse,
    editCourse,
    getCourses
}