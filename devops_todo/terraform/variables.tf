# variables.tf

variable "devops_pem" {
  description = "Name of the AWS EC2 Key Pair"
  type        = string
}

variable "private_pem_key_path" {
  description = "Path to the private key file used for SSH (e.g., ~/.ssh/my-key.pem)"
  type        = string
}
