import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';


export function generarToken(correoElectronico){
    return jsonwebtoken.sign({correoElectronico},process.env.JWT_TOKEN_SECRET,{ expiresIn: '1h'});   
}

export function verificarToken(req, res, next){

    const token = req.header('Authorization')?.replace('Bearer','');
    
    if(!token){
        return res.status(401).json({ error: 'Token requerido'});
    }
    
    try{
        const dataToken = jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
    } catch(e) {
        res.status(401).json({ error: 'Token no valido'});
    }

}
