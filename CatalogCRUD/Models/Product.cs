using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CatalogCRUD.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Image { get; set; }
        //public int? CategoryId { get; set; }
        //public virtual Category Category { get; set; }
        // Foreign Key
        public int CategoryId { get; set; }
        // Navigation property
        public Category Category { get; set; }
    }
}