import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://cfvajxegawkpccgxisgt.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdmFqeGVnYXdrcGNjZ3hpc2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2ODE5MDgsImV4cCI6MjA0MjI1NzkwOH0.d-a0kg7IW8cVZHHF9bNR_czeMGCgaIhX_Mx5xSEpaDo"
);

export default supabase;
