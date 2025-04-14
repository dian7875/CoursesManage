import { getCourses } from "../Services/Courses/CourseService";
import { useQuery } from "react-query";
import { Course } from "../types/courses";
import {
  Button,
  Pagination,
  Select,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import image from "../assets/Loanding_Gif.gif";
import AddNew from "./Modals/AddNew";
import CourseRow from "./CourseRow";

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
          <div className=" text-left">
            <h2 className=" text-2xl font-black">
              List Of Courses Of University Three Duckling
            </h2>
          </div>
          <div className="w-full flex justify-between">
            <TextInput
              onChange={(e) => setSearchName(e.currentTarget.value)}
              placeholder="Course name"
            />
            <Button color={"gray"} onClick={() => openAddNew(true)}>
              Add new
            </Button>
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
            <Table className=" bg-white min-h-[60vh] rounded-2xl">
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
                    <CourseRow key={course.id} course={course} />
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
