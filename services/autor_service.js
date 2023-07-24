class autorService{
  constructor(){
    this.autores=[];
    this.generate();
  }

  generate(){
    this.autores.push({
      id_autor,
      nombre,
      apellido,
      nacionalidad,
    });
  };

 async creador(){
    const { nombre, apellido, nacionalidad, } = data;
    const autor = {
      id_autor,
      nombre,
      apellido,
      nacionalidad,
    };
    this.autores.push(autor);
    return autor;
  };

  async buscar(){
    return this.autores;
  };

  async buscarId(id){
    return this.autores.find((e)=> e.id_autor === id);
  };

  async buscarNac(id, nacionalidad) {
  const index = this.autores.findIndex((e) => e.id_autor === id);
  if (index === -1) {
    throw new Error('Author not found');
  }
  const autor = this.autores[index];
  autor.nacionalidad = nacionalidad;
}


  async update(id, changes){
    const index = this.autores.findIndex((e)=> e.id_autor === id);
    if (index === -1) {;
      throw new Error('No existe este autor')
    }
    const autor = this.autores[index];
    this.autores[index]={
      ...autor,
      ...changes
    };
    return this.autores[index];
  };

  async  delete(id){
    const index = this.autores.findIndex((e)=> e.id_autor === id);
    if (index === -1) {
      throw new Error ('No existe')
    }
    this.autores.splice(index,  1);
    return { id };
  }
}

module.exports = autorService;
