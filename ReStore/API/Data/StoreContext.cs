using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public sealed class StoreContext : DbContext
    {

        public DbSet<Product> Products { get; set; }
        public StoreContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

        
        }
    }
}