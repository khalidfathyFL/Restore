using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


// add controller 
builder.Services.AddControllers();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors();
// add dataabse
builder.Services.AddDbContext<StoreContext>((opt) =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();


// Create a scope to manage the lifetime of services (used for dependency injection).
// The scope is necessary because the database context (StoreContext) might have a limited lifetime.
var scope = app.Services.CreateScope();

// Get an instance of StoreContext (your database context) from the service provider.
// StoreContext is used to interact with the database.
var context = scope.ServiceProvider.GetRequiredService<StoreContext>();

// Get an instance of a logger (to log information, warnings, or errors).
// The logger will help us log any issues that happen during the migration process.
var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

// Start a try-catch block to handle any exceptions that may occur during migration.
try
{
    // Apply any pending database migrations (i.e., updates the database schema to match the latest code changes).
    context.Database.Migrate();

    // Initialize the database (for example, seeding initial data or setting up default values).
    DbInitializer.Initialize(context);
}
catch (Exception ex)
{
    // If any error occurs during migration or initialization, log the error with the logger.
    logger.LogError(ex, "A problem occurred during migration");
}

app.UseCors(opt=>{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
});
app.Run();


