pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Repository already cloned by Jenkins'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t users-api:${BUILD_NUMBER} .'
            }
        }
        
        stage('Deploy Local') {
            steps {
                sh '''
                    docker stop users-api || true
                    docker rm users-api || true
                    docker run -d --name users-api -p 3000:3000 users-api:${BUILD_NUMBER}
                '''
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}