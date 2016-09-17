namespace CatalogCRUD.Migrations
{
    using CatalogCRUD.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CatalogCRUD.Models.CatalogCRUDContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CatalogCRUD.Models.CatalogCRUDContext context)
        {
            context.Categories.AddOrUpdate(x => x.Id,
          new Category() { Id = 1, Name = "Car" },
          new Category() { Id = 2, Name = "Phone" },
          new Category() { Id = 3, Name = "TV" }
          );

            context.Products.AddOrUpdate(x => x.Id,
                new Product()
                {
                    Id = 1,
                    Name = "BMW",
                    Description = "good car",
                    CategoryId = 1,
                    Price = 100,
                    Image = "qwe"
                },
                new Product()
                {
                    Id = 2,
                    Name = "Apple",
                    Description = "very cool phone",
                    CategoryId = 1,
                    Price = 111,
                    Image = "qwe"
                },
                new Product()
                {
                    Id = 3,
                    Name = "Nokia",
                    Description = "bad phone",
                    CategoryId = 2,
                    Price = 150,
                    Image = "qwe"
                },
                new Product()
                {
                    Id = 4,
                    Name = "Panasoniv",
                    Description = "Color TV",
                    CategoryId = 3,
                    Price = 355,
                    Image = "qwe"
                }
                );
        }
    }
}
