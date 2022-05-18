import React, { useState, useEffect } from "react";

import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_PUBLIC_KEY);

function Playground() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("artist").select("*");
    return data;
  };

  useEffect(() => {
      fetchData()
    console.log(data);
  });

  return (
    <div>
      <p>Click me</p>
    </div>
  );
}

export default Playground;
