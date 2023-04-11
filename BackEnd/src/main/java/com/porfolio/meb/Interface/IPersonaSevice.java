package com.porfolio.meb.Interface;

import com.porfolio.meb.Entity.Persona;
import java.util.List;

public interface IPersonaSevice {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);
            
    // eliminar un objeto pero lo buscamos por id
    public void deletePersona(Long id);
    
    //buscar una persona por id
    public Persona findPersona(Long id);
}
