function Vetement( id, nom, couleur, description, prix ){
    this.id=id;
    this.nom=nom;
    this.couleur=couleur;
    this.description=description;
    this.prix=prix;
}
Vetement.prototype.calculerPrixEnEuro=function(){
return this.prix*0.09;
};
Vetement.prototype.calculerPrixEnDollar=function(){
    return this.prix * 0.095;
    };

    function Chemise( id, nom, couleur, description, prix,taille ){
        Vetement.call(this, id, nom, couleur, description, prix);
        this.taille=taille;
    } 
    Chemise.prototype=Object.create(Vetement.prototype);
    Chemise.prototype.constructor=Chemise;
    Vetement.prototype.obtenirTaille=function(){
        return taille;
        };
        function Pantalon( id, nom, couleur, description, prix,largeur,longueur ){
            Vetement.call(this, id, nom, couleur, description, prix);
            this.largeur=largeur;
            this.longueur=longueur;
        }
        Pantalon.prototype=Object.create(Vetement.prototype);
        Pantalon.prototype.constructor=Pantalon;
       let  v=new Vetement(1,2,3,4,5);
       v.calculerPrixEnEuro();
       let  v=new Vetement(1,2,3,4,5);
       let  v1=new Vetement(3,4,35,64,35);
       function Magazin(  nom, emplacement, [v,v1] ){
        this.nom=nom;
        this.emplacement=emplacement;
        this.tab=[v,v1];
    }
    function existeAuMagasin (id){
        for(i=0;i<count(id);i++){
            if(this.id==id){return true;}else{return false;}
        }
    }
  