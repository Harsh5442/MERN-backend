pipeline {
    agent any
    tools {
        nodejs 'nodejs' 
    }
 
    environment {
        NODEJS_HOME = 'C:/Program Files/nodejs'  
        SONAR_SCANNER_PATH = 'D:/sonar-scanner-6.2.1.4610-windows-x64/bin'
    }
 
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
 
        stage('Install Dependencies') {
            steps {
                script {
                    dir('backend') {
                        bat 'npm install' 
                        bat 'npm install -g eslint'
                    }
                }
            }
        }
 
        stage('Lint') {
            steps {
                script{
                    dir('backend') {
                        bat 'npm run lint'  
                    }
                }
            }
        }
    
        stage('Build') {
            steps {
                // Build the React app
                bat '''
                set PATH=%NODEJS_HOME%;%PATH%
                npm run build
                '''
            }
        }
 
        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Accessing the SonarQube token stored in Jenkins credentials
            }
            steps {
                // Ensure that sonar-scanner is in the PATH
                bat '''
                set PATH=%SONAR_SCANNER_PATH%;%PATH%
                where sonar-scanner || echo "SonarQube scanner not found. Please install it."
                sonar-scanner.bat -Dsonar.projectKey=backend-register ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.token=sqp_4e41738789975e6b397341bfe847e0613b16c5e2
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
        always {
            echo 'This runs regardless of the result.'
        }
    }
}
