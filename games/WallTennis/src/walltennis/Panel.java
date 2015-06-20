
package walltennis;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import javax.swing.ImageIcon;
import javax.swing.JPanel;
import javax.swing.Timer;



public class Panel extends JPanel implements ActionListener,KeyListener {
    
    Timer t = new Timer(5 ,this);
    
    int score = 0;
    double ballSpeed = 0;

    boolean leftBool = false;
    boolean rightBool = false;
    
    boolean game = true;
    boolean spaceButton = false;
    
    public Ball ball1 = new Ball(150,40,15,15,0,0);
    
    int paddleX = 125;
    int paddleY = 550;
    int paddleWidth = 75;
    int paddleHeight = 15;
    int paddlexVel = 0;
    int paddleyVel = 0;
    
    boolean scoreFive = false;
    boolean scoreTen = false;
    
    public void run(){
        t.start();
    }
    
    public Panel(){
        setFocusable(true);
        addKeyListener(this);
    }
    
    public void paintComponent(Graphics g){
        super.paintComponent(g);
        
        if (game){
            
            Font scoreFont = new Font("Consolas",Font.BOLD,32);
            g.setFont(scoreFont);
            
            setBackground(Color.BLACK);
            g.setColor(Color.CYAN);
            g.drawString(Integer.toString(score), 17, 34);

            // ball 1
            g.setColor(Color.MAGENTA);
            
            ImageIcon drake = new ImageIcon("E:\\STUFF\\Java\\NetBeans\\OOP\\WallTennis\\img\\drake.jpg") ;
            
            //drake.paintIcon(this, g, ball1.x, ball1.y);
    
            g.fillRoundRect(ball1.x, ball1.y, ball1.width, ball1.height,10,10);
            
            // paddle
            g.setColor(Color.GREEN);
            g.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
            
            Font spaceFont = new Font("consolas",Font.BOLD,14);
            
            if(spaceButton == false){
                g.setFont(spaceFont);
                g.drawString("Press SPACE to play!",80,20);
            }
            
        }
        else{
            
            setBackground(Color.BLACK);
            
            g.setColor(Color.WHITE);
            
            Font gameOver = new Font("Consolas",Font.BOLD,100);
            
            g.setFont(gameOver);
            g.setColor(Color.RED);
            
            g.drawString("GAME", 20, 110);
            g.drawString("OVER!", 20, 180);
            
            Font font = new Font("Consolas",Font.BOLD,14);
            g.setFont(font);
            g.setColor(Color.GREEN);
          
            g.drawString("Press 'P' to play again!",20,540);
           
            Font font2 = new Font("Consolas",Font.BOLD,25);
            g.setFont(font2);
            
            g.setColor(Color.CYAN);
            String scoreString = Integer.toString(score);
            g.drawString("Your Score is: " + scoreString,20,320);
            
        }
        
    }
    
    public void actionPerformed(ActionEvent e){
        
        // paddle
        paddleX += paddlexVel;
        paddleY += paddleyVel;
        
        ball1.animate();
        ball1.Collision(this);  
        ball1.paddleCollision(this);
        ball1.ballScore(this);
        ball1.gameOver(this);
        ball1.speedIncrease(this);
        
        repaint();
    }
    
    public void keyTyped(KeyEvent e){
        
    }
    
    
    @Override
    public void keyPressed(KeyEvent e){
        int code = e.getKeyCode();
        switch(code){
            case KeyEvent.VK_LEFT:
                paddlexVel = -4;
                if(rightBool){
                    rightBool = false;
                }
                leftBool = true;
                break;
            case KeyEvent.VK_RIGHT:
                paddlexVel = 4;
                if(leftBool){
                    leftBool = false;
                }
                rightBool = true;
                break;
            case KeyEvent.VK_SPACE:
                ballSpeed = 2;
                ball1.xVel = ballSpeed;
                ball1.yVel = ballSpeed;
                spaceButton = true;
                break;
            case KeyEvent.VK_P:
                game = true;
                score = 0;
                break;
        }
    }
    
    @Override
    public void keyReleased(KeyEvent e){
        int code = e.getKeyCode();
        switch(code){
            case KeyEvent.VK_LEFT:
                paddlexVel = 0;
                break;
            case KeyEvent.VK_RIGHT:
                paddlexVel = 0;
                break;
        }
    }
    
}
