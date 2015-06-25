
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
        g.fillOval(x, y, width, height);
    }
    
    public void animate(){
        x += xVel;
        y += yVel;
    }
     
    public void Collision(Panel p ){
        
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
