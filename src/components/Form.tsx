
import { useForm } from 'react-hook-form'
import { createCourse } from '../Services/Courses/CourseService';
import Course from '../types/courses';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./Form.css"
function Form() {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      await createCourse(data);

    } catch (error) {
      console.error('Error in create course', error);
    }
  };



  const [maxQuota, setMaxQuota] = useState(0);
  const { register, handleSubmit, setValue, watch } = useForm<Course>();
  const navigate = useNavigate();

  const maxQuotaValue = watch('maximun_quota');

  useEffect(() => {
    setMaxQuota(Number(maxQuotaValue));
  }, [maxQuotaValue]);

  useEffect(() => {
    const spaceAvailable = Math.floor(Math.random() * (maxQuota + 1));
    setValue('space_available', spaceAvailable);
  }, [maxQuota, setValue]);

  const onCancel = () => {
    navigate('/');
  };


  return (

    <>
 <h1 className='add-course'>Add Course</h1>
    <div className="form-container">



      <form className='Form-Class' onSubmit={handleSubmit(onSubmit)}>
 
        
        <label htmlFor="name">Course Name</label>
        <input type="text" id='name'  {...register('name')} />

        <label htmlFor="status">Course Status</label>
        <input type="checkbox" id='status' {...register('status')} />

        <label htmlFor="maximun_quota">Maximum Quota</label>
        <input type="number" id='maximun_quota'  {...register('maximun_quota')} />


        <label htmlFor="space_available">Space Available</label>
        <input type="number" id='space_available'  {...register('space_available')} readOnly />


        <label htmlFor="professor">Professor Name</label>
        <input type="text" id='professor' {...register('professor')} />

        <label htmlFor="course_code"> Course Code</label>
        <input type="text" id='course_code'  {...register('course_code')} />

        <label htmlFor="classroom_number">Classroom Number</label>
        <input type="number" id='classroom_number'  {...register('classroom_number')} />

        <button type="submit">Send</button>
        <button type='button' onClick={onCancel}>Cancel</button>
      </form>
    </div>
    </>
  )
}

export default Form
