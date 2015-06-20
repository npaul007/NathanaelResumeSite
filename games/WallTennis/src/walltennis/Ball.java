
package walltennis;

public class Ball {
    int x;
    int y;
    int width;
    int height;
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

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public double getxVel() {
        return xVel;
    }

    public void setxVel(double xVel) {
        this.xVel = xVel;
    }

    public double getyVel() {
        return yVel;
    }

    public void setyVel(double yVel) {
        this.yVel = yVel;
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
        
    }
    
    public void paddleCollision(Panel p){
        if(y >= p.paddleY - p.paddleHeight && p.rightBool){
            if(x >= p.paddleX  && x <= p.paddleX + p.paddleWidth ){
                xVel = p.ballSpeed;
                yVel = -p.ballSpeed;

            }
        }
        else if(y >= p.paddleY - p.paddleHeight && p.leftBool){
            if(x >= p.paddleX  && x <= p.paddleX + p.paddleWidth ){
                xVel = -p.ballSpeed;
                yVel = -p.ballSpeed;

            }
        }
    }
    public void gameOver(Panel p){
        if(y > 600){
            p.game = false;
            p.scoreFive = false;
            xVel = 0;
            yVel = 0;
            x = 150;
            y = 40;
            p.ballSpeed = 2;
            p.paddleX = 125;
            p.spaceButton = false;
        }
    }
    public void ballScore(Panel p){
        if(y < 0){
            p.score = p.score + 1;
        }
    }
    public void animate(){
        x += xVel;
        y += yVel;
    }
    
    public void speedIncrease(Panel p){
        switch(p.score){
            case 10:
                p.ballSpeed = 2.25;               
                break;
            case 20:
                p.ballSpeed = 2.5;
                break;
            case 30:
                p.ballSpeed = 2.75;
                break;
            case 40:
                p.ballSpeed = 3;
                break;   
            case 130:
                p.ballSpeed = 6.25;
                break;    
        }
    }

    
}
