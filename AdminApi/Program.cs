// Application.Run();

// var conn = new NpgsqlConnection("Server=database;Database=blog;User Id=root;Password=1234");
// conn.Open();
// NpgsqlDataAdapter adapter = new NpgsqlDataAdapter(" select * from pg_namespace ", conn);
// var table = new DataTable();
// adapter.Fill(table);
// Logger.LogError(table.Rows.Count.ToString());
// conn.Close();

// SqlConnection conn = new SqlConnection(connString);
// SqlCommand cmd = new SqlCommand(query, conn);
// conn.Open();

// // create data adapter
// SqlDataAdapter da = new SqlDataAdapter(cmd);
// // this will query your database and return the result to your datatable
// da.Fill(dataTable);
// conn.Close();
// da.Dispose();

//   using(NpgsqlConnection connection = new NpgsqlConnection()) {  
//             connection.ConnectionString = "Server=database;Database=blog;User Id=root;Password=1234";  

//             connection.Open();  
//             NpgsqlCommand cmd = new NpgsqlCommand();  
//             cmd.UnknownResultTypeList = new[] { false, true };
//             cmd.Connection = connection;  
//             cmd.CommandText = "select * from pg_namespace";  
//             cmd.CommandType = CommandType.Text;  
//             NpgsqlDataAdapter da = new NpgsqlDataAdapter(cmd);  
//             DataTable dt = new DataTable();  
//             da.Fill(dt);  
//             cmd.Dispose();  
//             connection.Close();  
//         }
NpgsqlConnection connecton1 = new NpgsqlConnection("Server=database;Database=blog;User Id=root;Password=1234");
connecton1.Open();
NpgsqlCommand cmd = new NpgsqlCommand("select * from pg_namespace",connecton1);
var db = new DataTable();
var dr  = cmd.ExecuteReader();
db.Load(dr);

