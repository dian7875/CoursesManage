import { Dispatch, SetStateAction } from "react";

export type ToggleStateProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
  };