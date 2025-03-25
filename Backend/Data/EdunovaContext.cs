using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class EdunovaContext : DbContext
    {

        public EdunovaContext(DbContextOptions<EdunovaContext> opcije) : base(opcije)
        {
            //ovdje se  mogu fino postaviti opcije, ali ne za sada
        }


        public DbSet<Riba> Ribe { get; set; } // zbog ovog ovdje Smjerovi se tablica zove u mnozini

    }
}
