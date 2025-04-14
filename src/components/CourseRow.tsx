import { TableRow, TableCell } from "flowbite-react";
import { Course } from "../types/courses";
import DeleteOne from "./Modals/DeleteOne";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdMovieEdit } from "react-icons/md";
import { MdOutlineViewInAr } from "react-icons/md";
import ViewOne from "./Modals/ViewOne";
import EditOne from "./Modals/EditOne";
const CourseRow = ({ course }: { course: Course }) => {
  const [deleteC, opendelete] = useState<boolean>(false);
  const [openV, openView] = useState<boolean>(false);
  const [openE, openEdit] = useState<boolean>(false);
  return (
    <>
      <TableRow>
        <TableCell>{course.id}</TableCell>
        <TableCell>{course.professor}</TableCell>
        <TableCell>{course.name}</TableCell>
        <TableCell className="">
          {course.status ? (
            <div className=" bg-blue-400 text-white rounded-md">Open</div>
          ) : (
            <div className=" bg-red-400 text-white rounded-md">Closed</div>
          )}
        </TableCell>
        <TableCell>{course.space_available}</TableCell>
        <TableCell className=" text-center">
          <div className=" flex space-x-3 items-center justify-center">
            <MdOutlineViewInAr
              size={25}
              className=" hover:text-blue-600"
              onClick={() => openView(true)}
            />
            <MdMovieEdit
              size={25}
              className=" hover:text-yellow-600"
              onClick={() => openEdit(true)}
            />
            <RiDeleteBin6Fill
              size={25}
              className=" hover:text-red-600"
              onClick={() => opendelete(true)}
            />
          </div>
        </TableCell>
      </TableRow>
      <ViewOne course={course} open={openV} setOpen={openView} />
      <EditOne course={course} open={openE} setOpen={openEdit} />
      <DeleteOne id={course.id} open={deleteC} setOpen={opendelete} />
    </>
  );
};

export default CourseRow;
