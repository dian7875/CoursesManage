import { TableRow, TableCell, Popover } from "flowbite-react";
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
      <Popover
        className="hidden max-sm:block"
        trigger="click"
        content={
          <div className=" flex flex-col items-start space-y-4 p-4 bg-zinc-200">
            <div className="">
              <button type="button" onClick={() => openView(true)}>
                View details
              </button>
            </div>
            <div className="">
              <button type="button" onClick={() => openEdit(true)}>
                Edit
              </button>
            </div>
            <div className="">
              <button type="button" onClick={() => opendelete(true)}>
                Delete
              </button>
            </div>
          </div>
        }
      >
        <TableRow>
          <TableCell>{course.id}</TableCell>
          <TableCell>{course.professor}</TableCell>
          <TableCell>{course.name}</TableCell>
          <TableCell className=" max-sm:hidden">
            {course.status ? (
              <div className=" bg-blue-400 text-white rounded-md">Open</div>
            ) : (
              <div className=" bg-red-400 text-white rounded-md">Closed</div>
            )}
          </TableCell>
          <TableCell className=" max-md:hidden">
            {course.space_available}
          </TableCell>
          <TableCell className=" text-center max-sm:hidden">
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
      </Popover>
      <ViewOne course={course} open={openV} setOpen={openView} />
      <EditOne course={course} open={openE} setOpen={openEdit} />
      <DeleteOne id={course.id} open={deleteC} setOpen={opendelete} />
    </>
  );
};

export default CourseRow;
