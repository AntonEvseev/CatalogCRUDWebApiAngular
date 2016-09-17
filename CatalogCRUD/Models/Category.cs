using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CatalogCRUD.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }


        //public virtual ICollection<Product> Products { get; set; }

        //public Category()
        //{
        //    Products = new List<Product>();
        //}
        //public override string ToString()
        //{
        //    return Name;
        //}
    }
}