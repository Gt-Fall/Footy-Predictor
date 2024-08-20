import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://chcygcmqenagtbhhqzxe.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoY3lnY21xZW5hZ3RiaGhxenhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNDc5NzIsImV4cCI6MjAzNTYyMzk3Mn0.yBdVvgyLDyux0McIguBp7C1Qip3C3BnNp5aXBrkb3xk';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
