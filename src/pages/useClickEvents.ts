import { useState } from "react";
import { useForm } from "react-hook-form";
import Course from "../types/courses";

export const toggleStatus = () => {
    const {setValue} = useForm<Course>({})
    const [status, setStatus] = useState<boolean>(true);

    setStatus(!status);
    if (status) {
      setValue("status", true);
    } else {
      setValue("status", false);
    }
  };

 export const handleChangeCR = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {setValue, watch} = useForm<Course>({})
    const currentRegistration = parseInt(e.target.value) || 0;
    const maximumQuota = watch('maximun_quota');
    const spaceAvailable = maximumQuota - currentRegistration;
    setValue('space_available', spaceAvailable);
  };

 export const handleChangeMQ = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {setValue, watch} = useForm<Course>({})
    const maximumQuota = parseInt(e.target.value) || 0;
    const currentRegistration = watch('current_registration');
    const spaceAvailable = maximumQuota - currentRegistration;
    setValue('space_available', spaceAvailable);
  };
