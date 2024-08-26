import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IValues } from "../../types";
import { useForm } from "../../hooks";

export const Page2: React.FC = () => {
  const { handleSubmit, register, errors, reset } = useForm();

  const handleAdd = (data: IValues) => {
    console.log(data);
    reset();
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.age) {
      ageRef.current?.focus();
    }
  }, [errors]);
  return (
    <>
      <h1 className="styles.title">Page2</h1>
      <Link to="/">Page 1</Link>
      <form onSubmit={handleSubmit(handleAdd)}>
        <div>
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <input
            {...register("name", { required: "Please fill name" })}
            ref={nameRef}
          />
        </div>
        <div>
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
          <input
            {...register("age", { required: "Please fill age" })}
            ref={ageRef}
          />
        </div>
        <button>Save</button>
      </form>
    </>
  );
};
