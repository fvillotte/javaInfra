package ld.reseoroom.Vue;

import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPasswordField;
import javax.swing.JTextField;

public class PageDeConnexion extends JFrame {

	private static final long serialVersionUID = 1L;
	
	JLabel login,mdp,titre;
	JTextField login1;
	JPasswordField mdp1;
	JButton valider,annuler;
	Dimension tailleEcran = getToolkit().getScreenSize();
	Font font = new Font("Arial",0,40);
	
	public PageDeConnexion() {
		super();
		this.setTitle("Page de connexion");
		this.setSize(getToolkit().getScreenSize());
		this.setResizable(true);
		
		titre = new JLabel("Page de connexion");
		titre.setFont(new Font("Arial",0,40));
		
		login = new JLabel("login");
		login1 = new JTextField();
		
		mdp = new JLabel("Mot de passe");
		mdp1 = new JPasswordField();
		mdp1.setSize(new Dimension((int) (this.tailleEcran.getWidth()*0.01), (int)(this.tailleEcran.getHeight()*0.01)));
		
		valider = new JButton("Valider");
		annuler = new JButton("Annuler");
		
		Container contenu = this.getContentPane();
		contenu.setLayout(new BorderLayout());
		
		Container top = new Container();
		top.setLayout(new FlowLayout());
		
		Container bot = new Container();
		bot.setLayout(new FlowLayout());
		
		Container midle = new Container();
		midle.setLayout(new GridLayout(0,2));
		
		
		
		top.add(titre);
	
		midle.add(login,BorderLayout.EAST);
		
		midle.add(login1,BorderLayout.WEST);
		
		midle.add(mdp,BorderLayout.EAST);
		
		midle.add(mdp1,BorderLayout.WEST);
		
		bot.add(valider);
		
		bot.add(annuler);
		
		contenu.add(top,BorderLayout.NORTH);
		contenu.add(bot,BorderLayout.SOUTH);
		contenu.add(midle,BorderLayout.CENTER);
		
//		login.setFont(this.font);
//		login.setBounds((int)(this.tailleEcran.getWidth()*0.1),(int) (this.tailleEcran.getHeight()*0.25),(int) (this.tailleEcran.getWidth()*0.2), (int)(this.tailleEcran.getHeight()*0.2));
//		login1.setBounds((int)(this.tailleEcran.getWidth()*0.3),(int) (this.tailleEcran.getHeight()*0.2),(int) (this.tailleEcran.getWidth()*0.3), (int)(this.tailleEcran.getHeight()*0.2));
//		
	}
	
}
