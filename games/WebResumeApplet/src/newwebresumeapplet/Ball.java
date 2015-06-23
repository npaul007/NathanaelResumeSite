
package newwebresumeapplet;

import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JPanel;

public class Ball {
    int x;
    int y;
    int width;
    int height;
    int genColor;
    double xVel;
    double yVel;
    
     Ball(int x,int y,int width,int height,double xVel,double yVel){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.xVel = xVel;
        this.yVel = yVel;
        
    }
     
    public void draw(Graphics g, JPanel ja){
        genColor = (1) + (int)(Math.random() * (5));
        switch(genColor){
            case 1:
                g.setColor(Color.BLUE);
            break;
            case 2:
                g.setColor(Color.GREEN);
            break;
            case 3:
                g.setColor(Color.RED);
            break;
            case 4:
                g.setColor(Color.PINK);
            break;
                
        }
        g.fillOval(x, y, width, height);
    }
    
    public void animate(){
        x += xVel;
        y += yVel;
    }
     
    public void Collision(Panel p  ){

        if(x > p.getWidth()){
            if(xVel == p.ballSpeed && yVel == p.ballSpeed ){
                xVel = -p.ballSpeed;
                yVel = p.ballSpeed;
            }else{
                xVel = -p.ballSpeed;
                yVel = -p.ballSpeed;
            }
        }
        else if(x < 0){
            if(xVel == -p.ballSpeed && yVel == p.ballSpeed ){
                xVel = p.ballSpeed;
                yVel = p.ballSpeed;
            }else{
                xVel = p.ballSpeed;
                yVel = -p.ballSpeed;
            }
        }
        else if(y < 0){
            if(xVel == -p.ballSpeed && yVel == -p.ballSpeed ){
                xVel = -p.ballSpeed;
                yVel = p.ballSpeed;
            }else{
                xVel = p.ballSpeed;
                yVel = p.ballSpeed;
            }
        }
        else if(y > p.getHeight()){
            if(xVel == -p.ballSpeed && yVel == p.ballSpeed ){
                xVel = -p.ballSpeed;
                yVel = -p.ballSpeed;
            }else{
                xVel = p.ballSpeed;
                yVel = -p.ballSpeed;
            }
        }
        
    }


}
