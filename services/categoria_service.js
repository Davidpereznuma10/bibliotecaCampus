class cateriaService{
  constructor(){
    this.categorias=[];
    this.generate();
  }

  generate(){
    this.categorias.push({
      id_categoria,
      nombre,
    });
  }

  async creador(){
    const { nombre } = data;
    const categoria ={
      id_categoria,
      nombre
    };
    this.categorias.push(categoria);
    return categoria;
  }

  async buscar(){
    return this.categorias;
  };

  async buscarId(id){
    return this.categorias.find((e)=> e.id_categoria === id);
  }

  async update(id, changes){
    const index = this.categorias.findIndex((e)=> e.id_categoria === id)
    if (index === -1) {
      throw new Error('Categoria no existe');
    };
    const categoria = this.categorias[index];
    this.categorias[index]={
      ...categoria,
      ...changes,
    };
    return this.categorias[index];
  };

  async delete(id){
    const index = this.categorias.findIndex((e)=> e.id_categoria === id)
    if (index === -1) {
      throw new Error('Categoria no existe');
    };
    this.categorias.splice(index , -1);
    return { id }
  }
}

module.exports= cateriaService;
