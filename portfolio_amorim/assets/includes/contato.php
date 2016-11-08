<div id="FaleConosco">
  <div id="AncoraContato"></div>

   <div class="ContentMax">

      <div class="row">

        <div class="col-xs-12 col-sm-6">

          <div class="tituloEsquerda">Contato</div>

          <form name="EmailSend" method="POST" action="">
            <div class="FormGrayBack">
               <input type="text" placeholder="Nome" name="NomeSender" id="">
            </div>
            <div class="FormGrayBack">
              <input type="text" placeholder="Email" name="EmailSender" id="">
            </div>
            <div class="FormGrayBack">
             <input type="text" placeholder="Assunto" name="AssuntoSender" id="">
            </div>
            <div class="FormGrayBack">
              <textarea name="TextSender" placeholder="Mensagem"></textarea>
            </div>
            <div class="FormBack">
              <input type="submit" value="ENVIAR" name="BtnSender" id="">
            </div>
          </form>

        </div>

        

        <div class="col-xs-12 col-sm-6 hidden-xs">

        

          <div id="ContentLocalizacao">
            <div class="InfoLocalizacao">
              
              Rua Carlos Comenale, 263 - 3º andar<br />
              São Paulo - Cep: 01332-030<br />
              contato@muranodesign.com.br<br />
              11 3266.5095
            </div>
            
          </div>

          <div id="MapWrapDesk"></div>

        </div>

      </div>
        

            <?php

              if(isset($_POST["NomeSender"]))
              {

                $to      = 'contato@muranodesign.com.br';
                $subject = $_POST["AssuntoSender"];
                $message = $_POST["TextSender"];
                $headers = 'From: '. $_POST["EmailSender"] . "\r\n" .
                    'Reply-To: contato@muranodesign.com.br' . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();

                mail($to, $subject, $message, $headers);

              }

            ?>


    </div>

  </div>