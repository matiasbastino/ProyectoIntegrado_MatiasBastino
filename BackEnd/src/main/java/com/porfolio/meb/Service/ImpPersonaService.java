package com.porfolio.meb.Service;

import com.porfolio.meb.Interface.
import com.porfolio.meb.Entity.Persona;
import com.porfolio.meb.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
        
@Service
public class ImpPersonaService implements IPersonaService{
       @Autowired IPersonaRepository ipersonaRepository;
       
@override
 public List<Persona> getPersona(){
 List<Persona> persona = ipersonaRepository.findAll();
 return persona;
    }   
 
 @override
 public void savePersona(Persona persona{
 ipersonaRepository.save(persona);
}
 @override
 public void deletePersona(Long id){
     ipersonaRepository.deleteById(id);
 }
 @override
 public Persona findPersona(Long id){
     Persona persona = ipersonaRepository.findById(id).orElse(null);
     return persona;
 }
}  