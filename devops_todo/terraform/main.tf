provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "app" {
  ami           = "ami-0b09627181c8d5778" # Replace with latest Ubuntu AMI
  instance_type = "t2.micro"
  key_name      = var.devops_pem

  tags = {
    Name = "todo-api-server"
  }

  provisioner "remote-exec" {
    inline = ["sudo apt update"]
    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file(var.private_pem_key_path)
      host        = self.public_ip
    }
  }
}