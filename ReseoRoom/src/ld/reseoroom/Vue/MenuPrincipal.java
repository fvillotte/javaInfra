package ld.reseoroom.Vue;

import java.awt.Container;
import java.awt.FlowLayout;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class MenuPrincipal extends JFrame {

	private JLabel titre,sousTitre1, sousTitre2, sousTitre3, sousTitre4;
	private JButton valider, lireReservation, supprimerReservation, bloquerUtilisateur, supprimerUtilisateur, lireInformation, ajouterSalle, supprimerSalle;
	private Object[] salles, crenaux;
	private JComboBox salle,crenau;
	
	public MenuPrincipal() {
		
		super();
		this.setTitle("Menu Principal");
		this.setSize(getToolkit().getScreenSize());
		this.setResizable(true);
		
		this.titre = new JLabel("Bienvenue");
		this.sousTitre1 = new JLabel("Reserver");
		this.sousTitre2 = new JLabel("Gestion réservations");
		this.sousTitre3 = new JLabel("Gestion utilisateurs");
		this.sousTitre4 = new JLabel("Gestion salles");
		
		valider = new JButton("Valider");
		lireReservation = new JButton("Lire réservations");
		supprimerReservation = new JButton("Supprimer réservations");
		bloquerUtilisateur = new JButton("Bloquer utilisateur");
		supprimerUtilisateur = new JButton("Supprimer utilisateur");
		lireInformation = new JButton("Lire information");
		ajouterSalle = new JButton("Ajouter salle");
		supprimerSalle = new JButton("Supprimer salle");
		
		salles = new Object [ ]{"salle1","salle2","salle3"};
		crenaux = new Object [ ]{"crénaux1","crénaux2","crénaux3"};
		
		this.salle = new JComboBox(salles);
		this.crenau = new JComboBox(crenaux);
		
		
		Container conteneurPrincipal = this.getContentPane();
		conteneurPrincipal.setLayout(new GridLayout(0,2));
		
		
		
		Container conteneurReservation = new Container();
		conteneurReservation.setLayout(new FlowLayout());
		
		Container conteneurGestionReservation = new Container();
		conteneurGestionReservation.setLayout(new FlowLayout());
		
		Container conteneurGestionSalle = new Container();
		conteneurGestionSalle.setLayout(new FlowLayout());
		
		Container conteneurGestionUtilisateur = new Container();
		conteneurGestionUtilisateur.setLayout(new FlowLayout());
		
		Container conteneurTitre = new Container();
		conteneurTitre.setLayout(new FlowLayout());
		
		conteneurPrincipal.add(conteneurReservation);
		conteneurPrincipal.add(conteneurGestionReservation);
		conteneurPrincipal.add(conteneurGestionUtilisateur);
		conteneurPrincipal.add(conteneurTitre);
		
		conteneurReservation.add(sousTitre1);
		conteneurReservation.add(salle);
		conteneurReservation.add(crenau);
		conteneurReservation.add(valider);
		
		conteneurGestionReservation.add(sousTitre2);
		conteneurGestionReservation.add(lireReservation);
		conteneurGestionReservation.add(supprimerReservation);
		
		conteneurGestionSalle.add(sousTitre3);
		conteneurGestionSalle.add(ajouterSalle);
		conteneurGestionSalle.add(supprimerSalle);
		
		conteneurGestionUtilisateur.add(sousTitre4);
		conteneurGestionUtilisateur.add(bloquerUtilisateur);
		conteneurGestionUtilisateur.add(supprimerUtilisateur);
		
		
		
		
	}
	
	
}
