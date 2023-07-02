.footer {
    background-color: #40BA21;
    padding: 20px 0;
    margin-top: auto;
    padding-left: 100px;
    padding-right: 470px;
    padding-top: 70px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-bottom: 0;
  }
  
  .footer p {
    color: #fff;
  }
  
  .footer nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid #fff;
    padding-bottom: 40px;
    margin-bottom: 20px;
  }
  
  .footer nav li {
    margin-right: 70px;
  }
  
  .footer nav li:last-child {
    margin-right: 0;
  }
  
  .footer nav a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
  
  .social-icons {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  .social-icons a {
    display: flex;
    align-items: center;
    margin-left: 50px;
  }
  
  .social-icons svg {
    width: 24px;
    height: 24px;
  }
  
  
  @media (max-width: 768px) {
    .footer {
      padding-left: 50px;
      padding-right: 50px;
    }
  
    .footer nav ul {
      flex-wrap: wrap;
      justify-content: center;
      border-bottom: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  
    .footer nav li {
      margin-right: 0;
      margin-bottom: 20px;
      text-align: center;
    }
  
    .social-icons a {
      margin-left: 20px;
    }
  }
  
  @media (max-width: 576px) {
    .footer {
      padding-left: 30px;
      padding-right: 30px;
    }
  
    .social-icons a {
      margin-left: 10px;
    }
  }
