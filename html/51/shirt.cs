using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shirt_example
{
    internal class shirt
    {
        public string color { get; set; }
        public string pattern { get; set; }
        public shirt(string color, string pattern)
        {
            this.color = color;
            this.pattern = pattern; 
        }
        public override string ToString()
        {
            return $"{this.color}{this.pattern}";
        }
    }
}
