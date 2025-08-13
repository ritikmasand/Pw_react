import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../redux/features/counterSlice";

function CompD() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // const auth = useSelector(state=>state.auth.isLoggedIn)
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment())}>increment</button>
      {/* {auth} */}
    </div>
  );
}

export default CompD;
