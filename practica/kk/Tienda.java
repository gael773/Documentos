import java.util.Scanner; 
public class Tienda {

    public static void main(String[] args) { 
        Scanner sca = new Scanner(System.in); 
        System.out.println("Registro de Productos"); 
        System.out.println ("¿Cuántos productos quieres registrar?"); 
        Producto[] inventario = new Producto[sca.nextInt()];
        for (int i = 0; i < inventario.length; i++) { 
            System.out.println("Registro producto #" + (i + 1) + ":"); 
            Producto prod = new Producto(); 
            System.out.println("Ingresa clave: "); 
            prod.setClave(sca.next()); 
            System.out.println("Ingresa nombre: "); 
            prod.setNombre(sca.next()); 
            System.out.println("Ingresa precio $: "); 
            prod.setPrecio(sca.nextDouble()); 
            inventario[i] = prod; 
        } 
        String listaProductos = "Lista de productos:\n"; 
        String listaBaratos = "Productos baratos: \n"; 
        String listaMedios = "Productos medios :\n"; 
        String listaCaros = "Productos caros :\n"; 
        int productosBaratos = 0; 
        int productosMedios = 0; 
        int productosCaros = 0; 
        double totalValorInventario = 0; 
        for (Producto p : inventario) { 
            listaProductos += "Clave: " + p.getClave() + ", Nombre: " + p.getNombre() + ", Precio: $" + p.getPrecio() + "\n"; 
            totalValorInventario += p.getPrecio(); 
            if (p.getPrecio() < 50) { 
                productosBaratos++; 
                listaBaratos += "Clave: " + p.getClave() + ", Nombre: " + p.getNombre() + ", Precio: $" + p.getPrecio() + "\n"; 
            } else if (p.getPrecio() >= 50 && p.getPrecio() <= 100) { 
                productosMedios++; 
                listaMedios += "Clave: " + p.getClave() + ", Nombre: " + p.getNombre() + ", Precio: $" + p.getPrecio() + "\n"; 
            } else if (p.getPrecio() > 100) { 
                productosCaros++; 
                listaCaros += "Clave: " + p.getClave() + ", Nombre: " + p.getNombre() + ", Precio: $" + p.getPrecio() + "\n"; 
            } 
        } 
        System.out.println(listaProductos); 
        System.out.println(listaBaratos); 
        System.out.println(listaMedios); 
        System.out.println(listaCaros); 
        System.out.println("Número de productos baratos: " + productosBaratos); 
        System.out.println("Número de productos medios : " + productosMedios); 
        System.out.println("Número de productos caros : " + productosCaros); 
        System.out.println("Valor total del inventario: $" + totalValorInventario); 
    } 
    }