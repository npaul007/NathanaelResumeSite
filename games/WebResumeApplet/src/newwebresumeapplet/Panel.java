
package newwebresumeapplet;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Random;
import javax.swing.JButton;
import javax.swing.JPanel;
import javax.swing.Timer;


public class Panel extends JPanel implements ActionListener,KeyListener{
    
    Timer t = new Timer(10,this);
    
    TimerListener tl = new TimerListener();
    Timer jumpTimer = new Timer(1000,tl);
    
    Ball[]ball = new Ball[1000];
   
    Random r = new Random();
    
    JButton moreBalls = new JButton("More Balls");
    JButton lessBalls = new JButton("Less Balls");
    
    int genX = 0;
    int genY = 0;
    int max = 3;
    int min = -3;
    
    
    int x = 200;
    int y = 400;
    int velX = 0;
    int velY = 0;
    
    boolean jump = false;
    int jumpTime = 200;
    
    int ballSpeed = 2;
    int n = 100;
    
    public Panel(){
        setBackground(Color.BLACK);
        setSize(500,500);
        
        t.start();
        setFocusable(true);
        addKeyListener(this);
     
        add(moreBalls);
        add(lessBalls);
        
        moreBalls.addActionListener(this);
        lessBalls.addActionListener(this);
        
     
        for(int i = 0; i < n; i++){
            genX = (70) + (int)(Math.random() * (400));
            genY = (70) + (int)(Math.random() * (400));
            ball[i] = new Ball(genX,genY,13,13,0,0);
        }
        
        for(int i = 0; i < n; i++){
            ball[i].xVel = ballSpeed;
            ball[i].yVel = ballSpeed;
            if(genX % 2 == 0){
                ball[i].yVel *= -1;
            }
        }
        
    }
    
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        g.setColor(Color.RED);
        //g.fillRect(x, y, 30, 30);
        
        for(int i = 0; i < n; i++){
            ball[i].draw(g, this);
        }
        
    }

    @Override
    public void keyTyped(KeyEvent ke) {

    }

    @Override
    public void keyPressed(KeyEvent ke) {
        int code = ke.getKeyCode();
        switch(code){
            case KeyEvent.VK_LEFT:
                velX = -3;
                break;
            case KeyEvent.VK_RIGHT:
                velX = 3;
                break;
            case KeyEvent.VK_SPACE:
                jump = true;
                break;
        }
    }

    @Override
    public void keyReleased(KeyEvent ke) {
        int code = ke.getKeyCode();
        switch(code){
            case KeyEvent.VK_LEFT:
                velX = 0;
                break;
            case KeyEvent.VK_RIGHT:
                velX = 0;
                break;
        }
    }

    @Override
    public void actionPerformed(ActionEvent ae) {
        
        Object code = ae.getSource();
        
        if(code == moreBalls){
            if(n == 100){
               return;
            }
            n+=1;
        }
        
        else if(code == lessBalls){
            if(n == 0){
                return;
            }
            n-=5;
        }
        
        if(jump){
            velY = -2;
            jumpTimer.start();
        }
        
        if(tl.seconds == 1 && jump){
            velY = 2;
        }
        
        if(tl.seconds == 2){
            velY = 0;
            jump = false;
            jumpTimer.stop();
            tl.seconds = 0;
            return;
        }
        
        for(int i = 0; i < n; i++){
            ball[i].Collision(this);
        }
        
        for(int i = 0; i < n; i++){
            ball[i].animate();
        }
        
        x += velX;
        y += velY;
        repaint();
    }
    
    
}

class TimerListener implements ActionListener{

    public int seconds = 0;
    
    @Override
    public void actionPerformed(ActionEvent ae) {
        
        seconds++;  
        
        System.out.println(seconds);
    }
    
    
}
