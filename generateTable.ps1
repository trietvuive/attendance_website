aws dynamodb create-table --table-name attendance --attribute-definitions AttributeName=StudentID,AttributeType=S --key-schema AttributeName=StudentID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region us-east-1 --query TableDescription.TableArn --output text
aws dynamodb create-table --table-name effort --attribute-definitions AttributeName=StudentID,AttributeType=S --key-schema AttributeName=StudentID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region us-east-1 --query TableDescription.TableArn --output text
aws dynamodb create-table --table-name progress --attribute-definitions AttributeName=StudentID,AttributeType=S --key-schema AttributeName=StudentID,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region us-east-1 --query TableDescription.TableArn --output text