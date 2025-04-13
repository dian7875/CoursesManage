import { getCourses } from "../Services/Courses/CourseService";
import { useQuery } from "react-query";
import { Course } from "../types/courses";
import {
  Button,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import image from "../assets/Loanding_Gif.gif";
import AddNew from "./Modals/AddNew";

function TableComp() {
  const [searchName, setSearchName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setlimit] = useState<number>(5);

  const handlePage = (Npage: number) => {
    setPage(Npage);
  };
  const handleLimit = (Nlimit: number) => {
    setlimit(Nlimit);
  };

  const { data: courses, isLoading } = useQuery<Course[]>(
    ["Courses", page, limit, searchName],
    () => getCourses(page, limit, searchName),
    {
      staleTime: 5000,
    }
  );

  const [addNew, openAddNew] = useState<boolean>(false);

  return (
    <>
      <main className=" flex items-center justify-center w-full mt-10">
        <section className="w-11/12 space-y-5">
          <div className=" flex justify-between">
            <h2 className=" text-2xl font-black">
              List Of Courses Of University Three Duckling
            </h2>
            <Button color={"gray"} onClick={() => openAddNew(true)}>
              Agregar nuevo
            </Button>
          </div>
          <div className="w-1/4">
            <TextInput
              onChange={(e) => setSearchName(e.currentTarget.value)}
              placeholder="Course name"
            />
          </div>
          {isLoading && (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <img src={image} alt="" />
              </div>
            </>
          )}
          {!isLoading && (
            <Table className=" bg-white min-h-[60vh]">
              <TableHead className=" text-center">
                <TableRow>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Teacher’s Name</TableHeadCell>
                  <TableHeadCell>Course Name </TableHeadCell>
                  <TableHeadCell>Course Status</TableHeadCell>
                  <TableHeadCell>Space Available</TableHeadCell>
                  <TableHeadCell>Actions</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className=" text-center text-black">
                {courses &&
                  courses?.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>{course.id}</TableCell>
                      <TableCell>{course.professor}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell className="">
                        {course.status ? (
                          <div className=" bg-blue-400 text-white rounded-md">
                            Open
                          </div>
                        ) : (
                          <div className=" bg-red-400 text-white rounded-md">
                            Closed
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{course.space_available}</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
          <div className=" flex justify-between">
            <div className=" flex items-center space-x-3">
              <label htmlFor="limit">Result peer page</label>
              <Select
                id="limit"
                onChange={(e) => handleLimit(Number(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </Select>
            </div>
            <Pagination
              layout="navigation"
              currentPage={page}
              totalPages={100}
              onPageChange={handlePage}
            />
          </div>
        </section>
      </main>
      <AddNew open={addNew} setOpen={openAddNew} />
    </>
  );
}

export default TableComp;
