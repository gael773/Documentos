
public class Producto {
    private String clave; 
    private String nombre; 
    private double precio;   
    public Producto() { 
           nombre="Sin registro"; 
    }   
    public Producto(String clave, String nombre, double precio) { 
        this.clave = clave; 
        	        this.nombre = nombre; 
        this.precio = precio; 
    } 
    public String getClave() { 
        return clave; 
    } 
    public void setClave(String clave) { 
        this.clave = clave; 
    } 
    public String getNombre() { 
        return nombre; 
    } 
  

    public void setNombre(String nombre) { 

        this.nombre = nombre; 

    } 

  

    public double getPrecio() { 

        return precio; 

    } 

  

    public void setPrecio(double precio) { 

        this.precio = precio; 

    } 

} 