package ld.reseoroom.Modele;

public class Salle {

	private String nom;
	private String numero;
	private enum status{
		all,
		prof,
		etudiant,
		notBookable,
		none;
	};
	private boolean projecteur;
	
	//CONSTRUCTEUR 
	
	public Salle(String nom, String numero, boolean projecteur) {
		this.nom = nom;
		this.numero = numero;
		this.projecteur = projecteur;
	}

	
	//ACCESSEURS
	
	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}


	public boolean isProjecteur() {
		return projecteur;
	}

	public void setProjecteur(boolean projecteur) {
		this.projecteur = projecteur;
	}
	
	//METHODES
	
}
