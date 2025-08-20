const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  "https://vxcnvidqesjrwqxcjtyo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Y252aWRxZXNqcndxeGNqdHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2NjAxODAsImV4cCI6MjA3MTIzNjE4MH0.HCNoGgK4a0DuiqwPt0iqtfUPkVnJ0mXpUP7HpsNlcOA"
);

module.exports = supabase;
