export interface AutorizacaoUser{
    accessToken: string;
    expiresIn: number;
    userToken:{
      id: "",
      email: "",
      claims: []
    }
}