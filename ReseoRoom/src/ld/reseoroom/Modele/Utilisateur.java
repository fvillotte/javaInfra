package ld.reseoroom.Modele;

public class Utilisateur {

		private String mail;
		private String mdp;
		private String role;
		
		//CONSTRUCTEUR
		
		public Utilisateur(String mail, String mdp, String role){
			this.mail = mail;
			this.mdp = mdp;
			this.role = role;
			
		}

		// ACCESSEURS
		public String getMail() {
			return mail;
		}

		public void setMail(String mail) {
			this.mail = mail;
		}

		public String getMdp() {
			return mdp;
		}

		public void setMdp(String mdp) {
			this.mdp = mdp;
		}

		public String getRole() {
			return role;
		}

		public void setRole(String role) {
			this.role = role;
		}
		
		//METHODES
		
		public void reserver(Salle salle) {
			
		}
		
		public void supprimerReservation() {
			
		}
		
		public void ajouterSalle() {
			
		}
		
		public void supprimerSalle() {
			
		}
		
		public void lireInfo() {
			
		}
		
		public void lireReservation() {
			
		}
		
		public void supprimerUtilisateur() {
			
		}
		
		public void bloquerUtilisateur() {
			
		}
}
